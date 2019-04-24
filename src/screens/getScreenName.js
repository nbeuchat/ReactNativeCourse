import { name as appName } from '../../app';

export default function getScreenName(componentName) {
  return `${appName}.${componentName}`;
}
