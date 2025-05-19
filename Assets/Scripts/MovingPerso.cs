using UnityEngine;

public class MovingPerso : MonoBehaviour
{
    public float speed = 5.0f; // Variable para controlar la velocidad del personaje

    void Start()
    {
        
    }

    void Update()
    {
        // Obtener la entrada del teclado
        float moveHorizontal = Input.GetAxis("Horizontal");
        float moveVertical = Input.GetAxis("Vertical");

        // Crear un vector de movimiento
        Vector3 movement = new Vector3(moveHorizontal, 0.0f, moveVertical);

        // Mover el personaje con la velocidad ajustada
        transform.Translate(movement * speed * Time.deltaTime);
    }
}
