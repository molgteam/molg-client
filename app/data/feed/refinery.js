import { API } from '@app/constants/STATUS';

function refineEdges(edge) {
  if (!edge) return false;
  const { node } = edge;

  return {
    dimensions: node.dimensions,
    displayUrl: node.display_url,
    likeCount: node.edge_media_preview_like?.count,
    captions: (node.edge_media_to_caption?.edges || []).map((e) => e.node.text),
    commentCount: node.edge_media_to_comment?.count,
    id: node.id,
    isVideo: node.is_video,
    userPk: node.owner?.id,
    timestamp: node.taken_at_timestamp,
    thumnailResoures: node.thumbnail_resources || [],
    thumbnailSrc: node.thumbnail_src,
  };
}

export function refineNodes(data) {
  const media = data.data?.user?.edge_owner_to_timeline_media;
  return (media?.edges || []).map(refineEdges).filter((v) => !!v);
}

export function refineStatus(data) {
  if (data.status === 'ok') {
    return API.SUCCESS;
  }

  return API.FAILURE;
}

export function refineCount(data) {
  const media = data.data?.user?.edge_owner_to_timeline_media;
  return media?.count;
}

export function refinePageInfo(data) {
  const media = data.data?.user?.edge_owner_to_timeline_media;
  return {
    endCursor: media?.page_info?.end_cursor,
    hasNextPage: media?.page_info?.has_next_page,
  };
}
