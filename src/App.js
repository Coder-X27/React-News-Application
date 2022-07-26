import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  pageSize=9;
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News key="general" country={"in"} pageSize={this.pageSize} type={"general"} />} />
            <Route exact path='/business' element={<News key="business" country={"in"} pageSize={this.pageSize} type={"business"} />} />
            <Route exact path='/entertainment' element={<News key="entertainment" country={"in"} pageSize={this.pageSize} type={"entertainment"} />} />
            <Route exact path='/health' element={<News key="health" country={"in"} pageSize={this.pageSize} type={"health"} />} />
            <Route exact path='/science' element={<News key="science" country={"in"} pageSize={this.pageSize} type={"science"} />} />
            <Route exact path='/sports' element={<News key="sports" country={"in"} pageSize={this.pageSize} type={"sports"} />} />
            <Route exact path='/technology' element={<News key="technology" country={"in"} pageSize={this.pageSize} type={"technology"} />} />
          </Routes>
        </Router>
      </>
    )
  }
}
// language
// Find sources that display news in a specific language. Possible options: ar de en es fr he it nl no pt ru sv ud zh. Default: all languages.
// country

// Find sources that display news in a specific country. Possible options: ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za. Default: all countries.
