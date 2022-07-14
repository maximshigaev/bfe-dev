
/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */

function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  let numberOfErrors = 0;

  const recursive = () => {
    return fetcher()
      .catch((err) => {
        numberOfErrors++;

        if (numberOfErrors <= maximumRetryCount) {
          return recursive();
        }

        throw err;
      });
  }

  return recursive();
}
