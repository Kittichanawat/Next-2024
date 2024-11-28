export default function Page({params}: {params: {slug: string}}) {
    return <h1>My post: {params.slug}</h1>;
}