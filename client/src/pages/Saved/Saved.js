import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListArticle } from "../../components/List";
import API from "../../utils/API";
import socketIOClient from "socket.io-client";


class Search extends Component {
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: ""
  };
  componentDidMount() {
    const { endpoint } = this.state;
    this.loadArticles();
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
          this.setState({articles: res.data})
        )
      .catch(err => console.log(err));
  };

  deleteArticleSubmit = id => {
    console.log("1 enter deleteArticleSubmit: "+id)
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  }

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
            {this.state.articles.length ? (
              <div className="devPanelPrimary">
                <div className="queryPanel"><h4>Saved Articles</h4></div>
                <div className="panel-body">
                  <List>
                    {this.state.articles.map(article => (
                      <ListArticle
                        key={article._id}
                        headline={article.headline}
                        link={article.link}
                        date={article.date}
                      >
                        <DeleteBtn onClick={() => this.deleteArticleSubmit(article._id)} />
                      </ListArticle>))}
                  </List>
                </div>
              </div>
              ) : (
              <ul className="list-group">
                <li className="list-group-item"><h3><em>No Saved Articles</em></h3></li>
              </ul>)
            }
          </Col>
        </Row>
      </Container>
     );
  }
}

export default Search;
