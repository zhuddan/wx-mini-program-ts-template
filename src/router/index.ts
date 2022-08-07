
interface Options {
  url: string,
  query: Recordable
}

export function useRouter() {
  function push(options: Options | string) {
    if (typeof options == 'string') {
      wx.navigateTo({
        url: options,
      });
    } else {
      const query = options.query || {};
      const p = [];
      for (const key in query) {
        if (Object.prototype.hasOwnProperty.call(query, key)) {
          p.push(`${key}=${query[key]}`);
        }
      }
      const url = `${options.url}?${p.join('&')}`;
      wx.navigateTo({
        url,
      });
    }
  }

  return {
    push,
  };
}