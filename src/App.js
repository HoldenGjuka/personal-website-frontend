import React from 'react'
import githubLogo from './images/GitHub_Logo.png'

export function Header () {
  const githubURL = 'http://github.com/HoldenGjuka'
  return(
    <div className="flex-header-parent">
      <h1>Welcome to my website!
        <a className='Github-link' id='github_logo' href={githubURL}></a>
          <img src={githubLogo} alt="GitHub logo"></img>
      </h1>
    </div>
  )
}

export function Navbar () {
  return ( 
    <div className="button-group">  
      <a href="./HOLDEN GJUKA CS Resume August.pdf">  
        <button>Resume</button>  
      </a>  
      <a href="./HOLDEN GJUKA CS Resume August.pdf">  
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

export function Footer() {
  return (
    <div className="footer">Made by Holden Gjuka, last updated 2022</div>
  )
}

function Parent() {
  return(
    <div className="flex-parent-element">
      <Child />
    </div>
  )
}

function Child() {
  return(
    <div className="flex-child-element">
      <div className="blog-space-header"><strong>Blog Space</strong></div>
      <BlogPost />
        

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



//creates HTML for a single BlogPost
class BlogPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "not_loaded",
      body: "not_loaded"
    }
    this.getDataFetch()
  }

  getDataFetch = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/home/')
      const output = await response.text()
      const parsed_output = JSON.parse(output)
      this.setState({
        title: parsed_output.title,
        body: parsed_output.body
      })
    } catch (error) {
      console.error(error)
    }
  }

  render(){
    return (
      <div class="blog-child">
        <h2>
          {this.state.title}
        </h2>
        <p>
          {this.state.body}
        </p>
      </div>
    )
  }
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
