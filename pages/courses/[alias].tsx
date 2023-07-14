import { FunctionComponent } from 'react';
import { withLayout } from '../../layouts/Layout';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import axios from 'axios';
import { IMenuItem } from '../../interfaces/menu.interface'
import { ITopPageModel } from '../../interfaces/top.page.interface'
import { ParsedUrlQuery } from 'node:querystring'
import { IProductModel } from '../../interfaces/product.interface'

interface ICourseProps extends Record<string, unknown>{
  menu: IMenuItem[];
  page: ITopPageModel;
  products: IProductModel[];
  firstCategory: number;
}

const firstCategory = 0;

const Course: FunctionComponent<ICourseProps> = ({ menu, page, products }) => {
  return (
    <>{products && products.length}</>
  )
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
    firstCategory
  });

  return {
    paths: menu.flatMap(item => item.pages.map(page => `/courses/${page.alias}`)),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<ICourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if ( !params ) {
    return {
      notFound: true,
    };
  }

  const { data: menu } = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
    firstCategory
  });
  const { data: page } = await axios.get<ITopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/" + params.alias);
  const { data: products } = await axios.post<IProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find/", {
    category: page.category,
    limit: 10,
  });

  return {
    props: {
      menu,
      firstCategory,
      page,
      products
    }
  }
};
