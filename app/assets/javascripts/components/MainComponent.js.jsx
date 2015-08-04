MainComponent = React.createClass({

  getInitialState: function(){
    return {
      path: location.pathname,
    }
  },

  onPathChange: function(){
    this.setState({path: location.pathname});
  },

  componentDidMount: function(){
    $(window).on('pushstate popstate', this.onPathChange);
  },

  componentWillUnmount: function(){
    $(window).off('pushstate popstate', this.onPathChange);
  },

  render: function(){
    return App.router(this.state.path);
    // return(
    //   <div className="MainComponent">
    //     <h1>hello world</h1>
    //     <div>Path: {this.state.path}</div>
    //     <div><ActionLink href="/foo">foo</ActionLink></div>
    //     <div><ActionLink href="/bar">bar</ActionLink></div>
    //     <div><ActionLink href="/boosh">boosh</ActionLink></div>
    //     <div><ActionLink href="/panda">panda</ActionLink></div>
    //     <div><ActionLink href="/frogs">frogs</ActionLink></div>
    //   </div>
    // );
  }

});