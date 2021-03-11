import Layout from '../../components/Layout'
import Post from '../../components/PostList'

function Blog() {
  return (
    <Layout title="Blog | Wunjo">
        <section className="container">
            <Post 
                image="/images/post1.png"
                title="Post Title"
                summary="Not all foods are created equal. Choose the ones that are right for you and your body."
                link=""
            />
        </section>
    </Layout>
  )
}

export default Blog