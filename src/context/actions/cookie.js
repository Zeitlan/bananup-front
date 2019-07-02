/* eslint-disable no-console */
export default (object) => {
  return {
      createCookie : (cookieName,cookieValue,daysToExpire, forceCookieAccess=false) =>
      {
        if (object.state.allowCookies || forceCookieAccess) {
          var date = new Date();
          date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
          document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
        }
      },
      checkCookieAccess : () => {
        var b = document.cookie.match('(^|[^;]+)\\s*' + 'AllowCookieAccess' + '\\s*=\\s*([^;]+)');
        var value = b ? (b.pop() == '1' ? true : false) : undefined;
        object.setState({allowCookies: value})
        return value
      },
      accessCookie : (cookieName, forceCookieAccess = false) => 
      {
        if (object.state.allowCookies || forceCookieAccess ) {
          var b = document.cookie.match('(^|[^;]+)\\s*' + cookieName + '\\s*=\\s*([^;]+)');
          return b ? b.pop() : undefined;
        }
        return undefined
      },
      resetCookie: (cookieName) => {
        if (object.state.allowCookies) {
          document.cookie = "" + cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
      },
      setAllowCookie: (value) => {
        object.setState({allowCookies: value})
        object.actions.createCookie('AllowCookieAccess', value ? '1' : '0', 365, true)
      }
  }
}
