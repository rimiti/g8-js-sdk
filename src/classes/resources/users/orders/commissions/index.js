import Common from '../../../../common/common';

export default class UsersOrdersCommissions extends Common {
  /**
   * @description Get user's commissions.
   * @param urlParams
   * @param headers
   * @return {Promise}
   */
  get(urlParams, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersOrdersCommissions, urlParams);
    return super.getRequest(url, headers);
  }
}