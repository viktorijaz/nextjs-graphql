import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';

export async function getStaticProps() {
  const graphcms = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/ckcngsgeh0rgr01xse1n70937/master');

  const { products } = await graphcms.request(
    `{
    products {
      slug
      name
    }
  }`
  );

  return {
    props: {
      products,
    },
  };
}

const ProductsPage =  ({ products }) =>
  products.map(({ slug, name }) => (
    <Link key={slug} href={`/products/${slug}`}>
      <a>{name}</a>
    </Link>
  ));


  export default ProductsPage;