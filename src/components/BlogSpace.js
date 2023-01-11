import React from 'react'

import { BlogSpaceContainer, BlogPostBox, BlogsHeader, BlogPostTitle, 
        BlogPostBody, BlueHighlightSpanBox, BlogsContainer } 
        from "../styles/BlogSpace"
import { db_url } from "../debug"

//Retrieves blogs data and renders the blogs, calls BlogPost for individual blogs
class Blogs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [""]
    }
    this.getBlogs()
  }
    
  getBlogs = async () => {
    try {
      const response = await fetch(db_url + 'home/')
      const output = await response.text()
      const parsed_output = JSON.parse(output)
      this.setState({
        blogs: parsed_output,
      })
    } catch (error) {
      console.error(error)
    }
  }

  render(){
    return (
      this.state.blogs.map(function(post, index){  //bad code, should use item ID of some sort
        return <BlogPost key={index} title={post.title} body={post.body} />
      })
    )
  }
}

//creates HTML for a single BlogPost component
function BlogPost(props) {
  return(
    <BlogPostBox>
      <BlogPostTitle>{props.title}</BlogPostTitle>
      <BlogPostBody>{props.body}</BlogPostBody>
    </BlogPostBox>
  )
}


//Parent Function rendering the entirety of the Body Component
export default function Body() {
  return (
      <BlogSpaceContainer>
        <BlogsHeader>
          <BlueHighlightSpanBox>Blog Space</BlueHighlightSpanBox>
        </BlogsHeader>
        <BlogsContainer>
          <Blogs />
        </BlogsContainer>
      </BlogSpaceContainer>
  )
}