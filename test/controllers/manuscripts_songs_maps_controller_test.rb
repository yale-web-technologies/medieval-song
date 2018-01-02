require 'test_helper'

class ManuscriptsSongsMapsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @manuscripts_songs_map = manuscripts_songs_maps(:one)
  end

  test "should get index" do
    get manuscripts_songs_maps_url
    assert_response :success
  end

  test "should get new" do
    get new_manuscripts_songs_map_url
    assert_response :success
  end

  test "should create manuscripts_songs_map" do
    assert_difference('ManuscriptsSongsMap.count') do
      post manuscripts_songs_maps_url, params: { manuscripts_songs_map: { manuscript_id: @manuscripts_songs_map.manuscript_id, song_id: @manuscripts_songs_map.song_id } }
    end

    assert_redirected_to manuscripts_songs_map_url(ManuscriptsSongsMap.last)
  end

  test "should show manuscripts_songs_map" do
    get manuscripts_songs_map_url(@manuscripts_songs_map)
    assert_response :success
  end

  test "should get edit" do
    get edit_manuscripts_songs_map_url(@manuscripts_songs_map)
    assert_response :success
  end

  test "should update manuscripts_songs_map" do
    patch manuscripts_songs_map_url(@manuscripts_songs_map), params: { manuscripts_songs_map: { manuscript_id: @manuscripts_songs_map.manuscript_id, song_id: @manuscripts_songs_map.song_id } }
    assert_redirected_to manuscripts_songs_map_url(@manuscripts_songs_map)
  end

  test "should destroy manuscripts_songs_map" do
    assert_difference('ManuscriptsSongsMap.count', -1) do
      delete manuscripts_songs_map_url(@manuscripts_songs_map)
    end

    assert_redirected_to manuscripts_songs_maps_url
  end
end
