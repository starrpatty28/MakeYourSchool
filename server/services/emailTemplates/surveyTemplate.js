const keys = require('../../config/keys');

module.exports = (survey) => {
  return ` 
    <html>
      <body>
        <div style="text-align: center">
          <h3> We'd like to know how to make your school a better place to learn!</h3>
          <p>Please answer the following question:</p>
          <p>${survey.body}</p>
          <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
        </div>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
        </div>
      </body>
    </html> 
  `;
};
 