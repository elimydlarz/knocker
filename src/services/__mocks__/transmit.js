export default function transmit(type, data, responseHandler) {
  const status = data.notes === 'FAIL' ? 500 : 201;
  responseHandler({ status });
}
