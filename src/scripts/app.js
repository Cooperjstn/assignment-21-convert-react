// const Backbone = require('Backbone')
const React = require('react')
const ReactDOM = require('react-dom')
const $ = require ('jquery')


console.log (React)

  let HomeView = React.createClass({
    render: function(){
      let jsxCongArray = this.props.userDataList.map(function(userObj, i){
         return <ProfileView legisObj={userObj} key={i} />
       })
       return (
         <div>
           <div>
             {jsxCongArray}
           </div>
         </div>
       )



}

})


  let ProfileView = React.createClass ({
    render: function (){
      return (
      <div className = 'col-sm-4 col-md-4'>
        <div className = 'thumbnail'>
          <h4>{this.props.legisObj.first_name} {this.props.legisObj.last_name}</h4>
            <h5>{this.props.legisObj.title}  {this.props.legisObj.party} {this.props.legisObj.state}</h5>
              <li>{this.props.legisObj.oc_email}</li>
              <li>{this.props.legisObj.website}</li>
              <li>{this.props.legisObj.facebook_id}</li>
              <li>{this.props.legisObj.twitter_id}</li>
              <br></br>
              <p>{'Term End'}: {this.props.legisObj.term_end}</p>
            </div>
          </div>




      )


    }


  })

// ReactDOM.render(<HomeView/>, document.querySelector('#app-container'))
$.getJSON("https://congress.api.sunlightfoundation.com/legislators?apikey=dde05dbec94a457d83cab6aafc94b3e8").then(function(serverRes){
  console.log ('hello')
   ReactDOM.render(<HomeView userDataList={serverRes.results} />, document.querySelector('#app-container') )
})
