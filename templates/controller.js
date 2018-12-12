const React = require('react');

class ControllerTpl extends React.PureComponent {
  render() {
    const {
      name
    } = this.props;

    return (
      <React.Fragment>
        <deletethisone dangerouslySetInnerHTML={{__html: `
          const React = require('react');
          
          class ${name}Controller extends React.Component {
            render() {
              return (
                <div>
                  <p>Hola Mundo</p>
                </div>
              )
            }
          }
        `}} />
      </React.Fragment>
    )
  }
}

module.exports = ControllerTpl;
