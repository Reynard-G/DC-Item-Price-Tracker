<?php

require_once 'vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

/*
 * DataTables example server-side processing script.
 *
 * Please note that this script is intentionally extremely simple to show how
 * server-side processing can be implemented, and probably shouldn't be used as
 * the basis for a large complex system. It is suitable for simple use cases as
 * for learning.
 *
 * See http://datatables.net/usage/server-side for full details on the server-
 * side processing requirements of DataTables.
 *
 * @license MIT - http://datatables.net/license_mit
 */

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Easy set variables
 */

// DB table to use
$table = 'csnUUID';

// Table's primary key
$primaryKey = 'Id';

// Array of database columns which should be read and sent back to DataTables.
// The `db` parameter represents the column name in the database, while the `dt`
// parameter represents the DataTables column identifier. In this case simple
// indexes
$columns = array(
    array( 'db' => 'ItemId', 'dt' => 0 ),
    array( 'db' => 'Mode',  'dt' => 1 ),
    array( 'db' => 'Amount',   'dt' => 2 ),
    array( 'db' => 'Quantity',     'dt' => 3 ),
    array( 'db' => 'Time',     'dt' => 4 ),
);

// SQL server connection information
/*$sql_details = array(
    'user' => 'u1795_tdlFYcn90H',
    'pass' => 'ZgfdnFLyyza6enuUEYjH4T99',
    'db'   => 's1795_chestshop_test',
    'host' => '174.136.202.154:3306'
    // ,'charset' => 'utf8' // Depending on your PHP and MySQL config, you may need this
);*/
$sql_details = array(
    'user' => $_ENV['DB_USERNAME'],
    'pass' => $_ENV['DB_PASSWORD'],
    'db'   => $_ENV['DB_DATABASE'],
    'host' => $_ENV['DB_HOST']
);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * If you just want to use the basic configuration for DataTables with PHP
 * server-side, there is no need to edit below this line.
 */

require( 'scripts/ssp.class.php' );

$test = SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns );
echo json_encode($test);
