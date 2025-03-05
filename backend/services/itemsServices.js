import itemsList from '../data-storage/data.js';
let items = itemsList;


class Item {
  constructor(cs, equipment_type, status, company, tech, serial, phone, sim, po, firmware, config) {
    this.cs = cs;
    this.equipment_type = equipment_type;
    this.status = status;
    this.company = company;
    this.tech = tech;
    this.serial = serial;
    this.phone = phone;
    this.sim = sim;
    this.po = po;
    this.firmware = firmware;
    this.config = config;
  }

}

function getAllItems() {
  return items;
}

function getItemByCS(cs) {
  const item = items.find((item) => item.cs === cs);
  return item;
}

function createItem(cs, equipment_type, status, company, tech, serial, phone, sim, po, firmware, config) {
  const newItem = new Product(cs, equipment_type, status, company, tech, serial, phone, sim, po, firmware, config);
  items.push(newItem);
  return newItem;
}

function updateItem(cs, equipment_type, status, company, tech, serial, phone, sim, po, firmware, config) {
  const index = items.findIndex((item) => item.cs === cs);
  if (index !== -1) {
    items[index].cs = cs
    items[index].equipment_type = equipment_type
    items[index].status = status
    items[index].company = company
    items[index].tech = tech
    items[index].serial = serial
    items[index].phone = phone
    items[index].sim = sim
    items[index].po = po
    items[index].firmware = firmware
    items[index].config = config
    return items[index];
  }
  return null;
}

function deleteItem(cs) {
  const index = items.findIndex((item) => item.cs === cs);
  if (index !== -1) {
    return items.splice(index, 1)[0];
  }
  return null;
}

function getItemByStatus(status) {
  const item = items.filter((item) => item.status === status);
  return item;
}

function getItemBySerial(serial) {
  const item = items.filter((item) => item.serial === serial);
  return item;
}

function getItemByEquipmentType(equipment_type) {
  const item = items.filter((item) => item.equipment_type === equipment_type);
  return item;
}

function getItemByCompany(company) {
  const item = items.filter((item) => item.company === company);
  return item;
}

function getItemByTech(tech) {
  const item = items.filter((item) => item.tech === tech);
  return item;
}

export default {
  Item,
  getAllItems,
  getItemByCS,
  createItem,
  updateItem,
  deleteItem,
  getItemBySerial,
  getItemByEquipmentType,
  getItemByStatus,
  getItemByCompany,
  getItemByTech
}