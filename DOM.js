//��������� � ������������� �����

//���� ������� �� �������� � ������������

//ParentNodes
//parentNode - ��� ���� �����
//parentElement - ������ ��� �����-���������

//ChildNodes
//childNodes(�������� ����) � ��������, ������� ����� ��������������� ������ ���� ��������, � �������� ���������� (���������� �����������)
//children(�������) � ��� ��������, ������� ����� ������ ����, ������� ��������� � ������ ����: body, div, ul, li, b ��� HTML.

//childNode, firstChild, lastChild - ��� ���� �����
//children, firstElementChild, lastElementChild - ������ ��� �����-���������


//���������� � ������������� �������� ����� ����� parentElement ��� parentNode.
//��� ��� ���������� ��������.�� ���� ��������� �����:
//parentElement ����� ����-�������,
//parentNode � ������ ��������.

document.documentElement.parentNode === document
document.documentElement.parentElement === null


//�������� firstChild � lastChild ������������ ������� ������ � ������� � ���������� ��������� �������� �� ������ childNodes.
elem.hasChildNodes() //���������, ���������� �� ������ �������� ����


//Siblings (������) � ����, � ������� ���� � ��� �� ��������.
//������ (���������) ���� � nextSibling.
//�����(����������) ���� � previousSibling.
//�������� � parentNode
//previousSibling, nextSibling - ��� ���� �����:
//previousElementSibling, nextElementSibling - ������ ��� �����-���������:


//1 ����� �������� � DOM
document.getElementById(id)
document.getElementsByTagName(tagName)
document.getElementsByClassName(className)
document.querySelector(selector) //�� ������ CSS-��������� (. � �����, # � id, ���������� � ��� ����
document.querySelectorAll(selector) //�� ������ CSS-��������� (. � �����, # � id, ���������� � ��� ����

//2 ��������� ��������� � DOM
elem.innerHTML = "content" //������� ������ �������� ��������
//������ ��� ��������� �������, ���������� ����� �������, ��������� ����������� �������, �������� ���: document.getElementById(id)

elem.setAttribute(attr, value) //�������/��������� ��������
//��������� �������� �������� ��� ������ � �������� ��� ����� �������� ���� ��� ������

elem.style.property = "style" //���������� �����
elem.style = "font-size: 20px; color: red"
elem.style.color = "red";

//3 ���������� � �������� ��������� � DOM

//���������� ��������
document.createElement(elem) 

const customDiv = document.createElement("div"); //������ �������
customDiv.innerHTML = "<span id="custom">������!</span>"; //��������� ��� (������������ document.createElement(elem))
const parent = document.getElementById("id"); //���� ������������ �������
document.body.insertBefore(customDiv, parent); //��������� ��������� ������� � ������ DOM (��������� ��)

//��� ����� ��������� ������
const content = "������!"
const parent = document.getElementById("id");
parent.innerHTML = `<div><span id="custom">${content}</span></div>`;

insertAdjacentHTML() //��������� ��������� ����� ��� HTML ��� XML � ��������� ���������� ����(nodes) � DOM - ������ � ��������� �������.
//������ ������� �� ������������ ��������� ��������.
//��������� ��� ��������� ������ � position � �������
//'beforebegin': �� ������ element(�� ������������ ����);
//'afterbegin': ����� ����� ������������ ���� element(����� ������ ��������);
//'beforeend': ����� ����� ����������� ����� element(����� ���������� �������);
//'afterend': ����� element(����� ������������ ����).

const parent = document.getElementById("id");
parent.insertAdjacentHTML('afterend', `<div><span id="custom"> ${content}</span></div>`);

//�������� ��������
elem.removeChild(child)

const removed = document.getElementById("custom");
const div = document.querySelector("div");
div.removeChild(removed);



