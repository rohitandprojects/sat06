//import { getAllPostsWithCategory } from "@/app/lib/firebase/post/read_server";
'use client';
 
import { PostCard } from "@/app/components/PostListView";
import { getAllPostsWithCategory } from "@/app/lib/firebase/post/read_server";
import { getAllCategories } from "@/app/lib/firebase/category/read_server";
//import { hyphenToSpace } from "@/utils/transformName";
 
export default async function generateStaticParams({ params }) {
  const { categoryId } = params;
  //alert('click on link: ');
  //const { categoryName } = params.name;
  const posts = await getAllPostsWithCategory(categoryId);
  const matchCateName = await getAllCategories();
  
  //console.log(categoryId + '  hi')
   //const spaceToHyphen = (str) => str.replace(/\s+/g, '-');
  return <section className="section margin-top120">
      <div className="container">         
          <div className="row">
            {matchCateName?.map((posted, key) => {
                return <div key={key} className="col-12 page-title">
                  {(posted?.id == categoryId) && <h1 className="text-center">{posted?.name}</h1>}
                </div>
              })} 
          </div>
          <div className="row">
              <div className="col-12 product-section">
                <div className="row">
                    {posts?.map((post, key) => {
                      return <PostCard post={post} key={key} />
                    })} 
                </div>
            </div>
          </div>  
      </div>
    </section>
    
}

{/* return(
  <section className="section margin-top120">
      <div className="container">         
          <div className="row">
              <div className="col-12 page-title">
              <h1 className="text-center">{}Ground Spices</h1>
              </div>
          </div>
          <div className="row">
              <div className="col-12 product-section">
              <div className="row">{posts?.map((post, key) => {
                    return <PostCard post={post} key={key} />
                  })} 
              </div>
          </div>
      </div>
  </section>
  
) */}