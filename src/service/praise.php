<!--服务层提供接口链接mysql完成数据更新-->
<?php 
	class ConnectObj {
		public $servername;
		public $username;
		public $password;
		public $dbname;
		public $conn = null;
		//构造方法
		public function constructor($servername,$username,$password,
			$dbname)
		{
			$this -> servername = $servername;
			$this -> username = $username;
			$this -> password = $password;
			$this -> dbname = $dbname;
		}
		//链接数据库
		public function connect()
		{
			try {
			    $this -> conn = new PDO("
			    	mysql:host=$this ->servername;
			    	dbname=$this -> dbname", 
			    	$this -> username,
			    	$this ->password);
			    echo "连接成功"; 
			}
			catch(PDOException $e)
			{
			    echo $e->getMessage();
			}	
		}
		//关闭数据库 
		public function closeConn()
		{
			$this -> conn = null;
		}

		//更新数据
		public function updateData($sql)
		{
			if($this -> conn == null){
				$this -> connect();
			}
			$this -> conn -> exec($sql);
			$this -> closeConn();
		}

	}

	class childConnect extends ConnectObj{
		public function constructor($servername,$username,$password,
			$dbname)		
		{
			parent::constructor($servername,$username,$password,
			$dbname);
		}
		public function updateThumbData()
		{
			$sql = 'update text set num = num +1 where id = 1';
			$this -> updateData($sql);
		}
	}
	$praiseConn = new childConnect('localhost','root','','test');
	$praiseConn -> updateThumbData();
 ?>