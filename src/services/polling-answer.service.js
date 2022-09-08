function createPollingAnswerService({ pollingAnswerRepository }) {
  async function create(body) {
    return await pollingAnswerRepository.create(body);
  }

  return { create };
}

module.exports = createPollingAnswerService;
