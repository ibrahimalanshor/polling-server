const {
  utils: { check },
} = require('@ibrahimanshor/my-express');

function createPollingOptionRepository({ pollingOptionModel }) {
  async function createMany(options) {
    return await pollingOptionModel.create(options);
  }

  async function exists(filter) {
    return pollingOptionModel.exists(filter);
  }

  async function find(id) {
    const pollingOption = await pollingOptionModel.findById(id);

    check.isNotFound(pollingOption === null);

    return pollingOption;
  }

  return { createMany, exists, find };
}

module.exports = createPollingOptionRepository;
