import React from 'react'


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logo_b64: ""
    }
    this.getLogo()
  }
  
  getLogo = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/home/github_logo/')
      const output = await response.text()
      this.setState({
        logo_b64: output,
      })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <div className="flex-header-parent">
        <h1>Welcome to my website!
          <a className='Github-link' id='github_logo' href='http://github.com/HoldenGjuka'>
            <img src={ "data:image/png;base64," + this.state.logo_b64 } alt="GitHub logo"></img>
          </a>
        </h1>
      </div>
    )
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resume_b64: ""
    }
    this.getResume()
  }
  
  getResume = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/home/resume/')
      const output = await response.text()
      this.setState({
        resume_b64: output,
      })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <div className="button-group">  
        <a download='Holden_Gjuka_Resume.png' 
        href={ "data:application/png;base64," + this.state.resume_b64 } 
        type='application/png'> 
          <button>Resume</button>  
        </a>  
        <a download='Holden_Gjuka_Resume.png' 
          href={ "data:application/png;base64," + this.state.resume_b64 } 
          type='application/png'>  
          <button>About Me</button>  
        </a>  
        <a href="mailto: holdengjuka@gmail.com">  
          <button>Email Me</button>  
        </a>  
        <a href="http://github.com/HoldenGjuka">  
          <button>Upcoming Projects</button>  
        </a>
      </div>
    )
  }
}

export function Footer() {
  return (
    <div className="footer">Made by Holden Gjuka, last updated 2022</div>
  )
}

function Parent() {
  return(
    <div className="flex-parent-element">
      <div className="flex-child-element">
        <div className="blog-space-header"><strong>Blog Space</strong></div>
        <BlogSpace />
      </div>
      <div className="flex-child-element">
          <div className="skills-header">Skills & Attributes</div>
          <dl>
            <dt>Full Stack Development</dt>
            <dd>JavaScript, TypeScript, Java, Python</dd>
          </dl>
      </div>
    </div>
  )
}

//creates the blog feature of the webpage
class BlogSpace extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [""]
    }
    this.getBlogs()
  }
    
  getBlogs = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/home/')
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
      this.state.blogs.map(function(post){
        return <BlogPost title={post.title} body={post.body} />
      })
    )
  }
}

//creates HTML for a single BlogPost component
function BlogPost(props) {
  return(
    <div className="blog-child">
      <h2>
        {props.title}
      </h2>
      <p>
        {props.body}
      </p>
    </div>
  )
}

//superfunction, refactor later so that the subfunctions are shown in index.js
export default function Geck () {
  return (
    <div className="body">
      <Header />
      <Navbar />
      <Parent />
      <Footer />
    </div>
  )
}
