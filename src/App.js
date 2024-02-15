import React from "react";

let array = [
  {
    urlBig: "https://en.js.cx/gallery/img2-lg.jpg",
    title: "2",
    url: "https://en.js.cx/gallery/img2-thumb.jpg",
  },
  {
    urlBig: "https://en.js.cx/gallery/img3-lg.jpg",
    title: "3",
    url: "https://en.js.cx/gallery/img3-thumb.jpg",
  },
  {
    urlBig: "https://en.js.cx/gallery/img4-lg.jpg",
    title: "4",
    url: "https://en.js.cx/gallery/img4-thumb.jpg",
  },
  {
    urlBig: "https://en.js.cx/gallery/img5-lg.jpg",
    title: "5",
    url: "https://en.js.cx/gallery/img5-thumb.jpg",
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.showPicture1 = this.showPicture1.bind(this);
    this.state = {
      Item1: "https://en.js.cx/gallery/img1-lg.jpg",
      collection: [],
    };
  }

  componentDidMount() {
    this.setPictureLittle();
  }

  setPictureLittle() {
    this.setState({
      collection: array,
    });
  }

  showPictureLarge(urlBig) {
    this.setState({
      Item1: urlBig,
    });

    console.log(urlBig);
  }

  showPicture1() {
    this.setState({
      Item1: "https://en.js.cx/gallery/img1-lg.jpg",
    });
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1>Hello</h1>
          </div>
          <h3 style={{ paddingLeft: "25px" }}>
            You can click any small picture to change it to a large one.
          </h3>
          <h3>
            Later you can click the big picture to go back to the first picture
          </h3>
          <div>
            <button onClick={this.showPicture1}>
              <img src={this.state.Item1} alt="Large" />
            </button>

            <ul
              style={{
                display: "flex",
                justifyContent: "space-evently",
                paddingLeft: "50px",
                listStyleType: "none",
              }}
            >
              {this.state.collection.map((item, key) => (
                <li key={key}>
                  {/* <button onClick={this.getPicture}> */}
                  <button onClick={() => this.showPictureLarge(item.urlBig)}>
                    <img src={item.url} alt="" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
