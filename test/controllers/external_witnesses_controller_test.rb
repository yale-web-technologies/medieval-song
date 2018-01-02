require 'test_helper'

class ExternalWitnessesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @external_witness = external_witnesses(:one)
  end

  test "should get index" do
    get external_witnesses_url
    assert_response :success
  end

  test "should get new" do
    get new_external_witness_url
    assert_response :success
  end

  test "should create external_witness" do
    assert_difference('ExternalWitness.count') do
      post external_witnesses_url, params: { external_witness: { label: @external_witness.label, song_id: @external_witness.song_id, url: @external_witness.url } }
    end

    assert_redirected_to external_witness_url(ExternalWitness.last)
  end

  test "should show external_witness" do
    get external_witness_url(@external_witness)
    assert_response :success
  end

  test "should get edit" do
    get edit_external_witness_url(@external_witness)
    assert_response :success
  end

  test "should update external_witness" do
    patch external_witness_url(@external_witness), params: { external_witness: { label: @external_witness.label, song_id: @external_witness.song_id, url: @external_witness.url } }
    assert_redirected_to external_witness_url(@external_witness)
  end

  test "should destroy external_witness" do
    assert_difference('ExternalWitness.count', -1) do
      delete external_witness_url(@external_witness)
    end

    assert_redirected_to external_witnesses_url
  end
end
