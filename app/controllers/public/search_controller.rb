class Public::SearchController < ApplicationController
  def index
    @authors = Author.all
  end

  def search
    logger.debug("SearchController#search params: #{params.inspect}")
    query_str = build_query(params['search'])
    logger.debug("query_str: #{query_str}")

    @songs = if query_str.empty?
      Song.all.order('first_line')
    else
      Song.where(query_str).order('first_line')
    end
  end

private

  def build_query(req_params)
    params = []
    nimev, dimev, author_id, first_line =
      req_params.values_at('nimev', 'dimev', 'author-id', 'first-line')

    params << "author_id = #{author_id.to_i}" unless author_id.empty?
    params << "nimev = '#{nimev}'" unless nimev.empty?
    params << "dimev = '#{dimev}'" unless dimev.empty?
    params << "first_line ILIKE '%#{first_line}%'" unless first_line.empty?
    params.join(' and ')
  end
end
