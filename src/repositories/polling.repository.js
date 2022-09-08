function createPollingRepository({ pollingModel }) {
  async function create(body) {
    return await pollingModel.create(body);
  }

  return { create };
}

module.exports = createPollingRepository;
