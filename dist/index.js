"use strict";

// src/index.ts
var conn1 = { db: "postgres", url: "postgres://user:pwd" };
var conn2 = { db: "mongo", url: "mongo://user:pwd" };
var conn3 = { db: "mysql", url: "mysql://user:pwd" };
var db = conn3.db;
var db21 = conn2.db;
var db32 = conn1.db;
