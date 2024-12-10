# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.



src/
├── presentation/
│   ├── components/
│   │   ├── MovieCard.js
│   │   ├── MovieList.js
│   │   └── SearchBar.js
│   ├── pages/
│   │   ├── HomeScreen.js
│   │   ├── MovieDetailsScreen.js
│   │   └── UpcomingScreen.js
│   └── navigation/
│       └── AppNavigator.js
├── domain/
│   ├── entities/
│   │   └── Movie.js
│   ├── usecases/
│   │   ├── GetMovieDetails.js
│   │   ├── GetUpcomingMovies.js
│   │   └── SearchMovies.js
│   └── repositories/
│       └── MovieRepository.js
├── data/
│   ├── services/
│   │   ├── MovieService.js
│   │   └── SearchService.js
│   └── repositories/
│       └── MovieRepositoryImpl.js
├── styles/
│   └── tailwind.config.js
├── utils/
│   ├── constants.js
│   └── helpers.js
└── App.js



// src/core/di/container.ts
import "reflect-metadata";
import { container } from "tsyringe";
import { MovieRepository } from "@/domain/repositories/MovieRepository";
import { MovieRepositoryImpl } from "@/infrastructure/repositories/MovieRepositoryImpl";
import { MovieService } from "@/infrastructure/services/MovieService";
import { HttpClient } from "@/infrastructure/http/HttpClient";

// Registrar dependencias
container.register("HttpClient", {
  useClass: HttpClient
});

container.register("MovieService", {
  useClass: MovieService
});

container.register<MovieRepository>("MovieRepository", {
  useClass: MovieRepositoryImpl
});

export { container };

// src/infrastructure/http/HttpClient.ts
import { injectable } from "tsyringe";
import axios, { AxiosInstance } from "axios";

@injectable()
export class HttpClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      params: {
        api_key: 'YOUR_API_KEY'
      }
    });
  }

  async get<T>(url: string): Promise<T> {
    const response = await this.client.get<T>(url);
    return response.data;
  }
}

// src/infrastructure/services/MovieService.ts
import { injectable, inject } from "tsyringe";
import { Movie } from "@/domain/entities/Movie";
import { HttpClient } from "../http/HttpClient";

@injectable()
export class MovieService {
  constructor(
    @inject("HttpClient") private httpClient: HttpClient
  ) {}

  async getTopMovies(): Promise<Movie[]> {
    const response = await this.httpClient.get<any>('/movie/top_rated');
    
    return response.results.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      releaseDate: new Date(movie.release_date),
      description: movie.overview,
      vote_average: movie.vote_average
    }));
  }
}

// src/infrastructure/repositories/MovieRepositoryImpl.ts
import { injectable, inject } from "tsyringe";
import { Movie } from "@/domain/entities/Movie";
import { MovieRepository } from "@/domain/repositories/MovieRepository";
import { MovieService } from "../services/MovieService";

@injectable()
export class MovieRepositoryImpl implements MovieRepository {
  constructor(
    @inject("MovieService") private movieService: MovieService
  ) {}

  async getTopMovies(): Promise<Movie[]> {
    return this.movieService.getTopMovies();
  }
}

// src/domain/repositories/MovieRepository.ts
export interface MovieRepository {
  getTopMovies(): Promise<Movie[]>;
}

// src/application/hooks/useMovies.ts
import { container } from "@/core/di/container";
import { MovieRepository } from "@/domain/repositories/MovieRepository";
import { useQuery } from "@tanstack/react-query";

export const useGetTopMovies = () => {
  const movieRepository = container.resolve<MovieRepository>("MovieRepository");

  return useQuery({
    queryKey: ["movies", "topMovies"],
    queryFn: () => movieRepository.getTopMovies(),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};

// src/index.ts o App.tsx
import "reflect-metadata";
import "@/core/di/container";
// ... resto de tus imports