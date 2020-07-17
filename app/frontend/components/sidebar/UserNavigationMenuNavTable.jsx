import React from 'react';
import {Link} from 'react-router-dom';

class UserNavigationMenuNavTable extends React.Component{
  constructor(props){
    super(props);
    this.changeShow = this.changeShow.bind(this);
    this.state = {dropped_down: true}
  }

  changeShow(e){
    e.preventDefault();
    document.querySelectorAll(".hideable").forEach((element) => element.classList.toggle("hidden"));
    this.setState({ dropped_down: !this.state.dropped_down });
  }
  
  render(){
    let arrow, showText;
    if (this.state.dropped_down){
      arrow = window.uparrowURL;
      showText = "Show Less";
    }else{
      arrow = window.downarrowURL;
      showText = "Show More";
    }
    return(
      <div className = "user-navigation-menu-nav-table">
        <ul>
          <li> <Link to={`/channels`}><svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" height="14" viewBox="0 0 512 512" width="18"><g><g><path d="m321.079 39.825c0-4.143-3.357-7.5-7.5-7.5h-262.642c-4.143 0-7.5 3.357-7.5 7.5v32.325c0 4.143 3.357 7.5 7.5 7.5h262.643c4.143 0 7.5-3.357 7.5-7.5v-32.325zm-15 24.825h-247.642v-17.325h247.643v17.325z" /><path d="m313.579 96.976h-195.971c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h195.972c4.143 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.501-7.5z" /><path d="m313.579 129.301h-195.971c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h195.972c4.143 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.501-7.5z" /><path d="m321.079 201.451c0-4.143-3.357-7.5-7.5-7.5h-195.971c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h195.972c4.142 0 7.499-3.357 7.499-7.5z" /><path d="m313.579 161.626h-195.971c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h195.972c4.143 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.501-7.5z" /><path d="m208.952 266.102c0-4.143-3.357-7.5-7.5-7.5h-83.844c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h83.844c4.142 0 7.5-3.358 7.5-7.5z" /><path d="m230.165 233.776c0-4.143-3.357-7.5-7.5-7.5h-105.057c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h105.058c4.142 0 7.499-3.357 7.499-7.5z" /><path d="m117.608 338.252h52.528c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-52.528c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5z" /><path d="m186.728 298.427c0-4.143-3.357-7.5-7.5-7.5h-61.62c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h61.62c4.142 0 7.5-3.358 7.5-7.5z" /><path d="m117.608 402.902h54.549c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-54.549c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5z" /><path d="m117.608 370.577h49.498c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-49.498c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5z" /><path d="m43.437 136.801c0 4.143 3.357 7.5 7.5 7.5h32.325c4.143 0 7.5-3.357 7.5-7.5v-32.325c0-4.143-3.357-7.5-7.5-7.5h-32.325c-4.143 0-7.5 3.357-7.5 7.5zm15-24.825h17.325v17.325h-17.325z" /><path d="m43.437 201.451c0 4.143 3.357 7.5 7.5 7.5h32.325c4.143 0 7.5-3.357 7.5-7.5v-32.325c0-4.143-3.357-7.5-7.5-7.5h-32.325c-4.143 0-7.5 3.357-7.5 7.5zm15-24.825h17.325v17.325h-17.325z" /><path d="m43.437 266.102c0 4.143 3.357 7.5 7.5 7.5h32.325c4.143 0 7.5-3.357 7.5-7.5v-32.325c0-4.143-3.357-7.5-7.5-7.5h-32.325c-4.143 0-7.5 3.357-7.5 7.5zm15-24.826h17.325v17.325h-17.325z" /><path d="m43.437 330.752c0 4.143 3.357 7.5 7.5 7.5h32.325c4.143 0 7.5-3.357 7.5-7.5v-32.325c0-4.143-3.357-7.5-7.5-7.5h-32.325c-4.143 0-7.5 3.357-7.5 7.5zm15-24.825h17.325v17.325h-17.325z" /><path d="m43.437 395.402c0 4.143 3.357 7.5 7.5 7.5h32.325c4.143 0 7.5-3.357 7.5-7.5v-32.325c0-4.143-3.357-7.5-7.5-7.5h-32.325c-4.143 0-7.5 3.357-7.5 7.5zm15-24.825h17.325v17.325h-17.325z" /><path d="m498.693 499.196-46.126-46.125 3.268-3.268c2.929-2.93 2.929-7.678 0-10.607l-21.525-21.525c9.76-18.356 14.94-38.937 14.94-60.315 0-32.206-11.75-62.607-33.219-86.308v-48.458c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v34.317c-4.869-3.917-9.981-7.452-15.301-10.588v-170.709h15.301v111.98c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-119.48c0-4.143-3.357-7.5-7.5-7.5h-22.801v-22.805c0-4.143-3.357-7.5-7.5-7.5h-24.829v-22.805c0-4.143-3.357-7.5-7.5-7.5h-327.29c-4.143 0-7.5 3.357-7.5 7.5v49c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-41.5h312.29v214.869c-5.873-.811-11.839-1.232-17.871-1.232-34.382 0-66.706 13.389-91.019 37.7-24.312 24.312-37.701 56.637-37.701 91.019 0 28.139 8.973 54.896 25.557 77.015h-191.256v-342.871c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v350.37c0 4.143 3.357 7.5 7.5 7.5h24.826v24.825c0 4.143 3.357 7.5 7.5 7.5h22.804v22.805c0 4.143 3.357 7.5 7.5 7.5h327.29c4.143 0 7.5-3.357 7.5-7.5v-14.894l.214-.214 20.411 20.411c1.465 1.464 3.385 2.196 5.304 2.196s3.839-.732 5.304-2.196c2.929-2.93 2.929-7.678 0-10.607l-20.411-20.411 15.107-15.107 46.126 46.125c1.465 1.464 3.385 2.196 5.304 2.196s3.839-.732 5.304-2.196c2.927-2.929 2.927-7.677-.001-10.607zm-58.769-54.697-28.973 28.973c-.003.003-.007.006-.01.009s-.006.007-.009.01l-3.258 3.258-13.68-13.681c6.175-4.295 12.054-9.193 17.555-14.694 5.465-5.465 10.373-11.338 14.706-17.545zm-86.523-399.194h17.329v193.458c-5.618-2.379-11.407-4.351-17.329-5.904zm-113.282 231.639c22.169-22.17 51.29-33.255 80.411-33.255s58.242 11.085 80.411 33.255c21.479 21.479 33.309 50.036 33.309 80.411 0 30.376-11.829 58.934-33.309 80.412-21.479 21.479-50.035 33.308-80.411 33.308s-58.933-11.828-80.411-33.308c-21.479-21.479-33.309-50.036-33.309-80.412 0-30.375 11.829-58.932 33.309-80.411zm-181.682 172.426h172.095c6.836 6.689 14.235 12.468 22.05 17.325h-194.145zm30.304 47.63v-15.305h198.575c.012 0 .019-.002.031-.002 10.858 2.878 22.02 4.322 33.183 4.322 20.747 0 41.493-4.975 60.278-14.917l20.223 20.223v5.679z" /><path d="m320.53 453.75c25.748 0 49.955-10.028 68.164-28.236 36.235-36.236 37.811-94.449 3.585-132.527-2.769-3.079-7.511-3.335-10.592-.564-3.08 2.77-3.333 7.511-.564 10.592 28.895 32.147 27.561 81.296-3.036 111.893-15.375 15.376-35.815 23.844-57.557 23.844-21.74 0-42.181-8.468-57.556-23.844-15.371-15.37-23.836-35.81-23.836-57.551 0-21.742 8.465-42.182 23.836-57.552 24.328-24.329 61.529-30.735 92.569-15.943 3.736 1.779 8.214.196 9.997-3.544 1.782-3.739.195-8.215-3.544-9.997-36.76-17.517-80.817-9.934-109.63 18.877-18.203 18.204-28.229 42.41-28.229 68.159 0 25.748 10.025 49.954 28.229 68.158 18.21 18.207 42.417 28.235 68.164 28.235z" /></g></g></svg>
           &nbsp;Channel browser</Link></li>
          <li> <Link to={`/users`}> <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" height="14" viewBox="0 0 512 512" width="14"><g><path d="m498.691 34.311h-485.381c-7.339 0-13.31 5.971-13.31 13.31v306.698c0 7.339 5.971 13.31 13.31 13.31h206.618c3.525 6.849 5.841 14.248 6.856 21.863h-74.459c-4.743 0-9.062 2.41-11.552 6.448l-26.099 42.317c-1.313 2.13-2.019 4.599-2.019 7.123v18.737c0 7.484 6.088 13.572 13.572 13.572h259.547c7.483 0 13.572-6.088 13.572-13.572v-18.737c0-2.535-.715-5.012-2.021-7.125l-26.098-42.314c-2.489-4.038-6.809-6.449-11.553-6.449h-74.459c1.015-7.614 3.331-15.013 6.856-21.863h134.126c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-411.197v-303.318h482v303.318h-35.802c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h37.492c7.339 0 13.31-5.971 13.31-13.31v-306.699c0-7.339-5.971-13.309-13.309-13.309zm-120.283 401.847h-168.784c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h174.722v11.531h-256.692v-11.531h46.969c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-41.032l19.53-31.666h74.251v10.239c0 4.891 3.293 9.215 8.007 10.516 13.545 3.737 27.803 3.707 41.239 0 4.715-1.3 8.008-5.625 8.008-10.516v-10.239h74.252zm-102.815-68.529c-3.925 9.732-5.966 20.167-5.966 30.732v13.175c-8.974 2.004-18.283 2.003-27.254 0v-13.175c0-10.565-2.041-21.001-5.965-30.732z" /><path d="m51.94 74.311c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-18.404c-4.707 0-8.536 3.829-8.536 8.536v266.246c0 4.707 3.829 8.536 8.536 8.536h444.928c4.707 0 8.536-3.829 8.536-8.536v-266.246c0-4.707-3.829-8.536-8.536-8.536h-391.524c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h385.06v253.318h-432v-253.318z" /></g></svg>
           &nbsp;&nbsp;People</Link></li>
          {/* <li className="hideable"><svg xmlns="http://www.w3.org/2000/svg" id="Capa_1"  height="14" viewBox="0 0 512 512" width="14"><g><g><path d="m444.555 191.141h-238c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h238c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z" /><path d="m444.555 248.474h-238c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h238c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z" /><path d="m444.555 305.807h-238c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h238c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z" /><path d="m468.378 125.549h-285.646c-24.053 0-43.622 19.568-43.622 43.622v179.617c0 24.053 19.568 43.622 43.622 43.622h200.211c2.141 0 4.13.963 5.458 2.644l64.655 81.853c2.548 3.226 6.266 4.984 10.159 4.984 1.447 0 2.919-.243 4.363-.745 5.327-1.85 8.769-6.689 8.769-12.328v-77.153c20.225-3.778 35.653-21.659 35.653-42.877v-179.618c0-24.053-19.568-43.621-43.622-43.621zm28.622 223.239c0 15.577-12.673 28.412-28.25 28.61-4.104.053-7.404 3.395-7.404 7.5v78.305l-61.174-77.447c-4.189-5.305-10.469-8.347-17.229-8.347h-200.211c-15.782 0-28.622-12.84-28.622-28.622v-179.617c0-15.782 12.839-28.622 28.622-28.622h285.646c15.782 0 28.622 12.84 28.622 28.622z" /><path d="m110.494 249.561c-5.13.728-9.724 3.369-12.936 7.435l-51.521 65.226v-65.371c0-4.105-3.3-7.447-7.404-7.5-13.031-.166-23.633-10.903-23.633-23.935v-156.361c0-13.203 10.742-23.945 23.945-23.945h248.663c13.203 0 23.945 10.742 23.945 23.945v28.932c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-28.932c0-21.474-17.471-38.945-38.945-38.945h-248.663c-21.474 0-38.945 17.471-38.945 38.945v156.361c0 18.667 13.371 34.438 31.038 38.124v66.366c0 5.328 3.252 9.901 8.286 11.649 1.365.474 2.755.704 4.123.704 3.677 0 7.192-1.662 9.599-4.709l56.284-71.256c.812-1.029 1.975-1.697 3.273-1.882 4.101-.582 6.954-4.379 6.371-8.48-.582-4.101-4.373-6.956-8.48-6.371z" /></g></g></svg>
             &nbsp;&nbsp;Threads</li>
          <li className="hideable"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1"  height="14" viewBox="0 0 512 512" width="14"><path d="m512 256c0 11.046-8.954 20-20 20s-20-8.954-20-20c0-119.103-96.897-216-216-216s-216 96.897-216 216 96.897 216 216 216c34.845 0 68.098-8.035 98.835-23.883 9.819-5.063 21.88-1.207 26.941 8.611 5.062 9.817 1.206 21.88-8.611 26.941-35.946 18.534-76.462 28.331-117.165 28.331-68.38 0-132.667-26.629-181.02-74.98-48.351-48.353-74.98-112.64-74.98-181.02s26.629-132.667 74.98-181.02c48.353-48.351 112.64-74.98 181.02-74.98s132.667 26.629 181.02 74.98c48.351 48.353 74.98 112.64 74.98 181.02zm-24.138 72.782c7.962 7.656 8.21 20.316.555 28.279-16.083 16.727-37.718 25.939-60.917 25.939-32.312 0-60.433-18.238-74.644-44.953-23.314 27.479-58.08 44.953-96.856 44.953-70.028 0-127-56.972-127-127s56.972-127 127-127 127 56.972 127 127v42.5c0 24.537 19.963 44.5 44.5 44.5 12.218 0 23.611-4.853 32.083-13.663 7.654-7.962 20.316-8.211 28.279-.555zm-144.862-72.782c0-47.972-39.028-87-87-87s-87 39.028-87 87 39.028 87 87 87 87-39.028 87-87z" /></svg>
           &nbsp;&nbsp;Mentions & Reactions</li>
          <li> <button onClick={this.changeShow}><img src={arrow} width="12" height="12" />&nbsp; {showText}</button></li> */}
        </ul>
      </div>
    )
  }
}

export default UserNavigationMenuNavTable;

//change inner elements of li to links as functionality is built out