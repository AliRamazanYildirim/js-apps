import { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Binding notwendig, um "this" verfügbar zu machen
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }
  
  componentDidMount() {
    console.log('Komponente wurde gemountet');
  }

  componentDidUpdate() {
    console.log('Komponente wurde aktualisiert. Neuer Count:', this.state.count);
  }

  render() {
    return (
      <div>
        <h2>Klassenkomponente</h2>
        <p>Anzahl: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Erhöhen</button>
      </div>
    );
  }
}