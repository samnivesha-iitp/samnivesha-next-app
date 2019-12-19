import React from "react";

const Notification = props => {
  return (
    <>
      <article className={`message  ${props.status} `}>
        <div className="message-header">
          <p>{props.successMsg || props.errorMsg}</p>
        </div>
      </article>
      <style global jsx>
        {`
          article.message {
            position: fixed;
            left: 20px;
            bottom: 20px;
            // -webkit-animation-name: display;
            // -webkit-animation-duration: 3s;
            // animation-name: display;
            // animation-duration: 3s;
          }
          @-webkit-keyframes display {
            from {
              display: block;
            }
            to {
              display: none;
            }
          }
          @keyframes display {
            from {
              display: block;
            }
            to {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};
export default Notification;
