<?php include_once '_partials/_header.php'; ?>

<div id="fullpage">

    <div class="section home-section">
      <canvas id="myCanvas"></canvas>
      <div class="row">
        <div class="col s12 m3 offset-m5">
          <div class="card">
            <div class="card-image">
              <img src="assets/img/avatar.jpg" class="materialboxed" data-caption="This was me attending DevCon PH Summit 2015">
              <span class="card-title">&#8212;Daniel Sarabusing<br/>&nbsp; &#8212; cs student</span>
            </div>
            <div class="card-content center">
              <span><i class="fa fa-quote-left" aria-hidden="true"></i></span><br/><br/>
              <div class="divider"></div>
              <span class="quotation"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section meetgreet-section">

        <div class="slide center mg-slide1">
          <span class="intro-1"></span>
        </div>

        <div class="slide center mg-slide2">
          <span class="intro-2"></span>
        </div>
        <div class="slide center mg-slide3">
          <span class="intro-3"></span>
        </div>
        <div class="slide center mg-slide4">
          <span class="intro-4"></span>
        </div>
        <div class="slide center mg-slide5">
          <span class="intro-5"></span>
        </div>
        <div class="slide center mg-slide6">
          <span class="intro-6"></span>
        </div>
        <div class="slide center mg-slide7">
          <span class="intro-7"></span>
          <form class="form-buzz">
            <div class="row">
              <div class="input-field col s4 offset-s2 center">
                <input type="text" id="name" name="name" class="validate">
                <label for="name">Name</label>
              </div>
              <div class="input-field col s4 center">
                <input type="email" id="email" name="email" class="validate">
                <label for="email">Email</label>
              </div>
              <div class="input-field col s12">
                <a class='waves-effect waves-light btn btn-notify'>Submit</a>
              </div>
            </div>
          </form>
        </div>
    </div>
    <div class="section prowess-section">
      <div class="container">
        <div class="row">
          <div class="col s6">
            <table class="centered">
              <thead>
                <tr>
                    <th data-field="id">Programming Language</th>
                    <th data-field="name">Frameworks</th>
                    <th data-field="price">Mastery %</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td id="trg1st">HTML 5 &amp; CSS 3</td>
                  <td><a href="http://materializecss.com/">MaterializeCSS</a><br/>
                      <a href="http://getbootstrap.com/">Bootstrap</a><br/>
                      <a href="http://foundation.zurb.com/">Foundation</a><br/>
                      <a href="http://semantic-ui.com/">SemanticUI</a>
                  </td>
                  <td>97%</td>
                </tr>
                <tr>
                  <td id="trg2nd">PHP</td>
                  <td><a href="https://www.codeigniter.com/">Codeigniter</a><br/>
                      <a href="https://cakephp.org/">CakePHP</a><br/>
                      <a href="https://laravel.com/">Laravel</a></td>
                  <td>90%</td>
                </tr>
                <tr>
                  <td id="trg3rd">Javascript</td>
                  <td><a href="https://angularjs.org/">AngularJS</a><br/>
                      <a href="https://jquery.com/">jQuery</a><br/>
                      <a href="https://nodejs.org/en/">node.js</a></td>
                  <td>85%</td>
                </tr>
                <tr>
                  <td id="trg4th">Java</td>
                  <td><a href="https://projects.spring.io/spring-framework/">SpringMVC</a></td>
                  <td>90%</td>
                </tr>
                <tr>
                  <td id="trg5th">Android</td>
                  <td><a href="https://cordova.apache.org/">Cordova</a><br/>
                      <a href="https://www.xamarin.com/">Xamarin</a></td>
                  <td>73%</td>
                </tr>
                <tr>
                  <td id="trg6th">C, C++, C#, Visual Basic</td>
                  <td><a href="https://www.microsoft.com/net">.Net</a></td>
                  <td>95%</td>
                </tr>
                <tr>
                  <td id="trg7th">Python</td>
                  <td><a href="https://www.djangoproject.com/">Django</a><br/>
                      <a href="http://flask.pocoo.org/">Flask</a></td>
                  <td>62%</td>
                </tr>
                <tr>
                  <td id="trg8th">Ruby</td>
                  <td><a href="http://rubyonrails.org/">Ruby on Rails</a></td>
                  <td>40%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="col s6 graph-container">
              <canvas id="myChart" class="center" width="15" height="15"></canvas>
          </div>
        </div>
      </div>
    </div>
    <div class="section webworks-section">

    </div>
    <div class="section communicate-section">
      
    </div>
    <div class="section journal-section">
      
    </div>
</div>


<div class="fixed-action-btn toolbar">
    <a class="btn-floating btn-large">
      <i class="large material-icons">menu</i>
    </a>
    <ul>
      <li class="waves-effect waves-light home" data-menuanchor="home"><a href="#home">Home</a></li>
      <li class="waves-effect waves-light meetgreet" data-menuanchor="meetgreet"><a href="#meet-greet">Meet &amp; Greet</a></li>
      <li class="waves-effect waves-light prowess" data-menuanchor="prowess"><a href="#prowess">Prowess</a></li>
      <li class="waves-effect waves-light webworks" data-menuanchor="webworks"><a href="#webworks">Webworks</a></li>
      <li class="waves-effect waves-light communicate" data-menuanchor="communicate"><a href="#communicate">Communicate</a></li>
      <li class="waves-effect waves-light journal" data-menuanchor="online-journal"><a href="#online-journal">Online Journal</a></li>
    </ul>
  </div>



<?php include_once '_partials/_footer.php'; ?>
