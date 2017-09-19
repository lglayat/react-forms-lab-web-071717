import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      isValid: true
    };
  }

  handleInput = (event) => {
    this.setState({
      poem: event.target.value,
      isValid: this.isValidPoem(event.target.value)
    })
  }

  countWords = line => line.split(' ').filter(l => l).length;


  isValidPoem = (poem) => {
    if (poem) {
      const poemLines = poem.split('\n').filter(l => l);
      const isRightAmountOfLines = poemLines.length === 3;
      const hasRightAmountOfWords = this.countWords(poemLines[0]) === 5 && this.countWords(poemLines[1]) === 3 && this.countWords(poemLines[2]) === 5;
      return isRightAmountOfLines && hasRightAmountOfWords;
    }
    return false;
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poem}
          onChange={this.handleInput}
        />
       {!this.state.isValid &&
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>
      }
      </div>
    );
  }
}

export default PoemWriter;
