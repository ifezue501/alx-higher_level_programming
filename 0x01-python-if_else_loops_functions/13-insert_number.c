#include "lists.h"
#include <stdlib.h>
#include <unistd.h>

/**
 * insert_node - inserts a number in an ordered linked list
 * @head: double pointer to the linked list
 * @number: number to insert in the new node
 *
 * Return: address of the new node, or NULL
 */
listint_t *insert_node(listint_t **head, int number) {
  listint_t *new_node = malloc(sizeof(listint_t));
  if (new_node == NULL) {
    return NULL; // failed to allocate memory for new node
  }
  new_node->n = number;

  if (*head == NULL || (*head)->n > number) {
    // insert at the beginning of the list
    new_node->next = *head;
    *head = new_node;
    return new_node;
}

listint_t *cur = *head;
while (cur->next != NULL && cur->next->n < number) {
  cur = cur->next;
}
// insert after cur
new_node->next = cur->next;
cur->next = new_node;
return new_node;
}
