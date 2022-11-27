import Api from './Api';
import { pathOr } from 'ramda';
import { TitleModel } from '../models/redux-models';
import { FormData } from '../types';

export default {
  async searchTitle(formData: FormData): Promise<TitleModel[]> {
    const response = await Api().get('AdvancedSearch/k_1fthmbb9', {
      params: {
        title: formData.title,
        release_date: formData.year ? `${formData.year}-01-01` : null,
        title_type: 'feature',
        limit: 50,
        genres: formData.genre,
      },
    });

    return response.data.results.length
      ? response.data.results.map((item: any) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          year: item.year,
          directors: item.directors,
          stars: item.stars,
          image: item.image ?? null,
          genres: item.genres,
          rating: item.imDbRating,
          contentRating: item.contentRating,
          plot: item.plot,
          runtime: item.runtimeMins,
          runtimeStr: item.runtimeStr,
          countries: item.countries,
          companies: item.companies,
          poster: pathOr(null, ['posters', 'posters', 0, 'link'], item),
          backdrop: pathOr(null, ['posters', 'backdrops', 0, 'link'], item),
          trailer: item.trailer?.linkEmbed,
        }))
      : null;
  },

  async getTitle(titleId: string): Promise<TitleModel | null> {
    const response = await Api().get(`Title/k_1fthmbb9/${titleId}/Posters,Trailer,Ratings`);
    const item = response.data;
    console.log(item);
    return item
      ? {
          id: item.id,
          title: item.title,
          year: item.year,
          directors: item.directors,
          stars: item.stars,
          image: item.image ?? null,
          genres: item.genres,
          rating: item.imDbRating,
          contentRating: item.contentRating,
          plot: item.plot,
          runtime: item.runtimeMins,
          runtimeStr: item.runtimeStr,
          countries: item.countries,
          companies: item.companies,
          poster: pathOr(null, ['posters', 'posters', 0, 'link'], item),
          backdrop: pathOr(null, ['posters', 'backdrops', 0, 'link'], item),
          trailer: item.trailer?.linkEmbed,
        }
      : null;
  },
};
