function refineEdges(edge) {
  if (!edge) return false;
  const { node } = edge;

  return {
    dimensions: node.dimensions,
    displayUrl: node.display_url,
    likeCount: node.edge_media_preview_like?.count,
    commentCount: node.edge_media_to_comment?.count,
    id: node.id,
    isVideo: node.is_video,
    userPk: node.owner?.id,
    timestamp: node.taken_at_timestamp,
    thumnailResoures: node.thumbnail_resources || [],
    thumbnailSrc: node.thumbnail_src,
  };
}

export function refineUserInfo(data) {
  const result = {};
  const media = data.data?.user?.edge_owner_to_timeline_media;

  result.status = data.status;
  result.count = media?.count;
  result.feedList = (media?.edges || []).map(refineEdges).filter((v) => !!v);
  result.pageInfo = {
    endCursor: media?.page_info?.end_cursor,
    hasNextPage: media?.page_info?.has_next_page,
  };

  return result;
}

export function hasStory(data) {
  return data.data?.user?.has_public_story;
}
