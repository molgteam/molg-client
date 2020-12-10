import * as ActionTypes from '@app/data/rootAcionType';

export function requestHasStory() {
  return {
    type: ActionTypes.REQUEST_HAS_STORY,
  };
}

export function successHasStory({ hasStory }) {
  return {
    type: ActionTypes.SUCCESS_HAS_STORY,
    hasStory,
  };
}

export function failureHasStory({ error }) {
  return {
    type: ActionTypes.FAILURE_HAS_STORY,
    error,
  };
}
