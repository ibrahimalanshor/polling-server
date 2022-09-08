function createPollingAnswerRepository({ pollingAnswerModel }) {
  async function create(body) {
    return await pollingAnswerModel.create(body);
  }

  return { create };
}

module.exports = createPollingAnswerRepository;
