import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListArticle } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import SaveBtn from "../../components/SaveBtn";
import NavSub from "../../components/NavSub";

class Search extends Component {
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  searchArticles = (event) => {
    event.preventDefault();
    API.findArticles(this.state.topic, this.state.startYear, this.state.endYear)
      .then(res => {
        this.setState({ articles: res.data.response.docs });
        console.log(this.state.articles);
      }
      )
      .catch(err => console.log(err));
  };

  saveArticleSubmit = (headline, link, date) => {
    console.log("headline");
    API.saveArticle({
      headline: headline,
      link: link,
      date: date
    })
      .then(res => console.log("saved article"))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <div className="devPanelPrimary">
              <NavSub
                subHeading={"Search Articles"}
                optionDiv={<ul className="nav navbar-nav navbar-right">
                  <li><a className="navSub" href="/saved">Go To Saved Articles</a></li>
                </ul>}
              >
              </NavSub>
              <div className="panel-body">
                <form>
                  <h4>Topic</h4>
                  <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="topic"
                  />
                  <h4>Start Year</h4>
                  <Input
                    value={this.state.author}
                    onChange={this.handleInputChange}
                    name="startYear"
                  />
                  <h4>End Year</h4>
                  <Input
                    value={this.state.author}
                    onChange={this.handleInputChange}
                    name="endYear"
                  />
                  <FormBtn
                    disabled={!(this.state.topic && this.state.startYear && this.state.endYear)}
                    onClick={this.searchArticles}
                  >
                    Submit
              </FormBtn>
                </form>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {this.state.articles.length ? (
              <div className="devPanelPrimary">
                <div className="queryPanel"><h4>Results</h4></div>
                <div className="panel-body">
                  <List>
                    {this.state.articles.map(article => (
                      <ListArticle
                        key={article._id}
                        headline={article.headline.main}
                        link={article.web_url}
                        date={article.pub_date}
                      >
                        <SaveBtn onClick={() => this.saveArticleSubmit(article.headline.main, article.web_url, article.pub_date)} />
                      </ListArticle>))}
                  </List>
                </div>
              </div>
            ) : (
                <ul className="list-group">
                  <li className="list-group-item"><h3><em>Enter Search to Begin</em></h3></li>
                </ul>)
            }
          </Col>
        </Row>
      </Container>

    );
  }
}

export default Search;
