import React, { Component } from 'react';

function Footer() {
  return (
    <div>
        <footer class="page-footer light-blue darken-4">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Make Your School <i className="material-icons">school</i></h5>
                <p class="grey-text text-lighten-4">222 Shoreline Drive Pittsbugh CA 94578</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Schools On Board</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="https://whs.rocklinusd.org/">Whitney Highschool</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://oxford.auhsd.us/">Oxford Academy</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.pacificcollegiate.com/">Pacific Collegiate Charter</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.sfusd.edu/school/lowell-high-school">Lowell High School</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer;