module.exports = (survey) => {
  return ` 
    <html>
      <body>
        <div style="text-align: center">
          <h3> We'd like to know how to make your school a better place to learn!</h3>
          <p>Please answer the following question:</p>
          <p>${survey.body}</p>
          <a href="http://localhost:3000">Yes</a>
        </div>
        <div>
          <a href="http://localhost:3000">No</a>
        </div>
      </body>
    </html> 
  `;
};
 