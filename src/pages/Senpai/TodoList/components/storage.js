export default function storage(option, key, value) {
  localStorage[option](key, value);
}