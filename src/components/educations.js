import React, { Component } from 'react';
import '../styles/educations.scss';
import Education from './education';

class Educations extends Component {
  state = {
    descriptions: [
      { id : 1, 
        year: '1990', 
        title: 'I was born in Katowice', 
        value : 
              `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, 
              exercitationem, totam, dolores iste dolore est aut modi.`
      },
      { id : 2, 
        year: '2005', 
        title: 'Secondary school specializing in artistic', 
        value : 
        `Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.`
      },
      { id : 3, 
        year: '2009', 
        title: 'First level graduation in Graphic Design', 
        value : 
        `Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? lusto, quibusdam 
        asperiores underepellat.`
      },
      { id : 4, 
        year: '2012', 
        title: 'Second level graduation in Graphic Design', 
        value : 'Ducimus, aliquam tempore autem itaque et accusantium!'
      },
    ],
  };

  render() {
    return(
      <div className="educations">
        <h1>EDUCATION</h1>
        {this.state.descriptions.map((description) => (
          <Education 
            year = {description.year}
            title = {description.title}
            value = {description.value}
          />
        ))}
      </div>
    );
  }
}

export default Educations;