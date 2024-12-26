
import { Helmet } from "react-helmet";

const UseTitle = ({title}) => {
   return(
      <div>
          <Helmet>
               <title>{title}</title>
          </Helmet>
      </div>
   )
};

export default UseTitle;