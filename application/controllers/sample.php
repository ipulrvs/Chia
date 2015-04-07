<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Sample extends CI_Controller {

	function __construct()
	{
		parent::__construct();
		$this->load->database(); 
	}

	// Query total data
	public function total(){
		$total = $this->db->count_all_results('sample');

		$respond = new stdClass();
		$respond->total = $total;

		header('Content-type: application/json');
		echo json_encode($respond, JSON_PRETTY_PRINT);
	}

	// Query for Pagination
	public function pagination(){
		$limit = (int)($this->input->get('limit'));
		$total = (int)($this->input->get('total'));

		$pages = ceil($total / $limit);
		$start = 0;
		$pagination = array();

		while($start < $pages){
			$link = new stdClass();
			$link->page =  $start + 1;
			$link->limit = $limit;
			$link->offset = $limit * $start;
			$link->total = $pages;

			$pagination[] = $link;

			$start++;
		}

		header('Content-type: application/json');
		echo json_encode($pagination, JSON_PRETTY_PRINT);
	}

	// Query searchDefault
	public function search()
	{
		$field = $this->input->get('field');
		$data = $this->input->get('data');

		$this->db->select('*');
		$this->db->from('sample');
		$this->db->like($field, $data);

		$query = $this->db->get();

		header('Content-type: application/json');
		echo json_encode($query->result());
	}

	// Query all data
	public function findAll()
	{
		$limit = (int)($this->input->get('limit'));
		$offset = (int)($this->input->get('offset'));

		$query = $this->db->get("sample", $limit, $offset);

		header('Content-type: application/json');
		echo json_encode($query->result(), JSON_PRETTY_PRINT);
	}


	// Query all data match by parameter
	public function findBy()
	{
		$query = $this->db->get_where("sample", $_GET);
		header('Content-type: application/json');
		echo json_encode($query->result());
	}

	// Query insert data
	public function save(){
		$get=file_get_contents('php://input');
		$json_get=json_decode($get);
		foreach($json_get as $key=>$value){
			$data[$key]=$value; 
		}

		$this->db->insert('sample', $data); 

		// Return Id Inserted Data
		$this->db->insert_id();

		$object = new stdClass();
		$object->id = $this->db->insert_id();

		header('Content-type: application/json');
		echo json_encode($object);
	}

	// Query delete data
	public function destroy(){		
		$get=file_get_contents('php://input');
		$json_get=json_decode($get);
		foreach($json_get as $key=>$value){
			$data[$key]=$value; 
		}
		$this->db->delete('sample', $data); 
	}

	// Query update data
	public function update(){
		$get=file_get_contents('php://input');
		$json_get=json_decode($get);

		foreach($json_get as $key=>$value){
			if($key == 'id'){
				$getId[$key]=$value; 
			} else {
				$data[$key]=$value; 
			}
		}

		$this->db->where('id', $getId['id']);
		$this->db->update('sample', $data); 
	}

}